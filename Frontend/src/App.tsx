
import './App.css'
import './components/css/table.scss'
import './components/css/commandbar.scss'
// import './components/css/document.scss'
// import './components/css/combobox.scss'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

// import './Resources/desktopPreview.css'

import './components/css/page-layout.scss';
import Users from './components/users/Users'

import NewCustomer from './components/customers/new'
import EditCustomer from './components/customers/edit'
import Items from './components/items/list'
import NewItem from './components/items/new'
import EditItem from './components/items/edit'
import Invoices from './components/invoices/list'
import NewInvoice from './components/invoices/new'
import EditInvoice from './components/invoices/edit'
import { PageLayout2 } from './components/PageLayout2'
import Customers from './components/customers/list';


const router = createBrowserRouter([
    {
        path: "/",
        element: <PageLayout2 />,

        children: [

            {
                path: '/',
                element: <Navigate to="/customers" />
            },
            {
                path: '/users',
                element: <Users />
            },
        
            {
                path: '/customers',
                element: <Customers />
            },
            {
                path: '/customers/new',
                element: <NewCustomer />
            },
            {
                path: '/customers/:Id',
                element: <EditCustomer />
            },
            {
                path: '/items',
                element: <Items />
            },
            {
                path: '/items/new',
                element: <NewItem />
            },
            {
                path: '/items/:Id',
                element: <EditItem />
            },
            {
                path: '/invoices',
                element: <Invoices />
            },
            {
                path: '/invoices/new',
                element: <NewInvoice />
            },
            {
                path: '/invoices/:id',
                element: <EditInvoice />
            },
            
           
        ]
    },
])


function App() {
    return (
        <div className='fontFamilyBase'>
            <RouterProvider router={router} /> 
         </div>
    )
}

export default App
