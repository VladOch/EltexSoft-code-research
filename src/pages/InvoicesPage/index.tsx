import React from 'react';
import { Route, Switch } from 'react-router';
import InvoicesHistory from './components/InvoiceHistory';
import InvoicesSection from './components/Invoice';

const InvoicesPage: React.FC = () => {

  return (
      <Switch>
        <Route path={'/dashboard/invoices/history'} exact component={InvoicesHistory}/>
        <Route path={'/dashboard/invoices'} component={InvoicesSection}/>
      </Switch>
  );
};

export default InvoicesPage;
