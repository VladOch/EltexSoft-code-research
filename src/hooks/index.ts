import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toast';
import copyToClipboard from 'copy-to-clipboard';
import i18next from 'i18next';
import { getNestingData } from '../utils';

export type useRequestType = {
    data: any,
    error: any,
    loading: boolean
}
const useRequest = (request: any, deps: any[] = []): useRequestType => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    useEffect(() => {
        setLoading(true);
        request().then((response: any) => setData(response))
            .catch((error: Error) => setError(error?.message))
            .finally(() => setLoading(false));

    }, deps);
    return { data, error, loading };
};

const useCopy = (text: string, callback: any) => {
    return useCallback(() => {
        try {
            copyToClipboard(text, {
                debug: true,
            });
            callback()
        } catch (e) {
            toast.error(i18next.t('errors.someWentWrong'));
        }
    }, []);
};

const useDidUpdateEffect = (fn: () => void, inputs: Array<any>) => {
    const didMountRef = useRef(false);
    useEffect(() => {
        if (didMountRef.current)
            return fn();
        else
            didMountRef.current = true;
    }, inputs);
};

const useBeforeUnload = (value: unknown) => {
    const handleBeforeunload = (e: any) => {
        let returnValue
        if (typeof value === 'function') {
            returnValue = value(e)
        } else {
            returnValue = value
        }
        if (returnValue) {
            e.preventDefault()
            e.returnValue = returnValue
        }
        return returnValue
    }

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeunload)
        return () => window.removeEventListener('beforeunload', handleBeforeunload)
        // eslint-disable-next-line
    }, [])
}

function useOnScreen(ref: RefObject<HTMLElement>, initState?: boolean) {

    const [isIntersecting, setIntersecting] = useState(initState || false)

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    )

    useEffect(() => {
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    }, [])

    return isIntersecting
}

const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};

interface UseScrollPaginationResponse {
    scrollRef: any,
    skip: boolean,
    data: any,
    loading: boolean,
    fetchLoading:boolean,
}

export const useScrollPagination = (request: any, deepNesting: boolean = true, take: number = 15): UseScrollPaginationResponse => {
    const scrollRef = useRef(null);
    const isVisible = useOnScreen(scrollRef);
    const isMount = useIsMount();
    const [skip, setSkip] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            setLoading(true);
            if (!isMount) {
                let data: any;
                data = deepNesting ? getNestingData(await request(page, take)) : await request(page, take);
                if (data.length < take) {
                    setSkip(true)
                }
                setData(prevState => [...prevState, ...data]);
            } else {
                let data: any;
                data = deepNesting ? getNestingData(await request(1, take)) : await request(1, take);
                if (data.length < take) {
                    setSkip(true);
                }
                setData(data);
                setLoading(false);
            }
        })();
    }, [page]);

    useEffect(() => {
        if (isVisible && !skip && !isMount && !loading) {
            setPage(prevState => prevState + 1);
        }
    }, [isVisible]);

    return {
        scrollRef,
        skip,
        data,
        loading: loading && isMount,
        fetchLoading: loading && !isMount
    }
}

const useWhatCausedRender = (name: string, props: any) => {
    const prevPropsRef = useRef({})

    useEffect(() => {
        const changes: any[] = [];
        const prevProps = prevPropsRef.current;
        const keySet = new Set([
            ...Object.keys(prevProps),
            ...Object.keys(props)
        ])
        keySet.forEach(key => {
            if (prevProps[key] === props[key]) {
                changes.push({
                    key,
                    from: prevProps[key],
                    to: props[key]
                })
            }
        })
        console.log(`[${name}] rerendered because of: `);
        changes.forEach(change => {
            const {key, from, to} = change;
            console.log(`${key}: ${from} => ${to}`);
        })

    });


    prevPropsRef.current = props;
}


export {
    useRequest,
    useCopy,
    useDidUpdateEffect,
    useBeforeUnload,
    useOnScreen,
    useIsMount,
    useWhatCausedRender
};
