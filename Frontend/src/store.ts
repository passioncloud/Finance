import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersServiceApi } from './services/UsersService'
import { approvalRequestsServiceApi } from './services/ApprovalRequestsService'
import { dashboardServiceApi } from './services/DashboardService'
import { permissionsServiceApi } from './components/permissions/PermissionsService'
import { employeeServiceApi } from './components/employees/EmployeeService'
import { customerServiceApi } from './components/customers/service'
import { itemServiceApi } from './components/items/service'
import { invoiceServiceApi } from './components/invoices/service'


export const store = configureStore({
    reducer: {
        [employeeServiceApi.reducerPath]: employeeServiceApi.reducer,
        [usersServiceApi.reducerPath]: usersServiceApi.reducer,
        [approvalRequestsServiceApi.reducerPath]: approvalRequestsServiceApi.reducer,
        [dashboardServiceApi.reducerPath]: dashboardServiceApi.reducer,
        [permissionsServiceApi.reducerPath]: permissionsServiceApi.reducer,
        [customerServiceApi.reducerPath]: customerServiceApi.reducer,
        [itemServiceApi.reducerPath]: itemServiceApi.reducer,
        [invoiceServiceApi.reducerPath]: invoiceServiceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        employeeServiceApi.middleware,
        customerServiceApi.middleware,
        itemServiceApi.middleware,
        invoiceServiceApi.middleware,
        usersServiceApi.middleware, 
        approvalRequestsServiceApi.middleware, dashboardServiceApi.middleware, permissionsServiceApi.middleware)
})



// optional but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type MyRootState = ReturnType<typeof store.getState>

// inferred type: { posts: PostsState, comments: CommentsState, users: UsersState }
export type AppDispatch = typeof store.dispatch 