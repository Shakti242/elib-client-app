/* eslint-disable @typescript-eslint/no-unused-vars */ import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=f9313568"; const _jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=f9313568"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react;
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=f9313568"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/index.css?t=1733444015076";
import { RouterProvider } from "/node_modules/.vite/deps/react-router-dom.js?v=f9313568";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=f9313568";
import router from "/src/router.tsx?t=1733444015076";
// Create a QueryClient instance
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(/*#__PURE__*/ _jsxDEV(React.StrictMode, {
    children: /*#__PURE__*/ _jsxDEV(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsxDEV(RouterProvider, {
            router: router
        }, void 0, false, {
            fileName: "/Users/shaktipatel/Desktop/elib-dashboard/src/main.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "/Users/shaktipatel/Desktop/elib-dashboard/src/main.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this)
}, void 0, false, {
    fileName: "/Users/shaktipatel/Desktop/elib-dashboard/src/main.tsx",
    lineNumber: 13,
    columnNumber: 3
}, this));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFycyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcbmltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgUm91dGVyUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXIudHN4JztcblxuLy8gQ3JlYXRlIGEgUXVlcnlDbGllbnQgaW5zdGFuY2VcbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSEpLnJlbmRlcihcbiAgPFJlYWN0LlN0cmljdE1vZGU+XG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8Um91dGVyUHJvdmlkZXIgcm91dGVyPXtyb3V0ZXJ9IC8+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICA8L1JlYWN0LlN0cmljdE1vZGU+XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIlJvdXRlclByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwicm91dGVyIiwicXVlcnlDbGllbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiU3RyaWN0TW9kZSIsImNsaWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsb0RBQW9EO0FBQ3BELE9BQU9BLFdBQVcsUUFBUTtBQUMxQixTQUFTQyxVQUFVLFFBQVEsbUJBQW1CO0FBQzlDLE9BQU8sY0FBYztBQUNyQixTQUFTQyxjQUFjLFFBQVEsbUJBQW1CO0FBQ2xELFNBQVNDLFdBQVcsRUFBRUMsbUJBQW1CLFFBQVEsd0JBQXdCO0FBQ3pFLE9BQU9DLFlBQVksZUFBZTtBQUVsQyxnQ0FBZ0M7QUFDaEMsTUFBTUMsY0FBYyxJQUFJSDtBQUV4QkYsV0FBV00sU0FBU0MsY0FBYyxDQUFDLFNBQVVDLE1BQU0sZUFDakQsUUFBQ1QsTUFBTVUsVUFBVTtjQUNmLGNBQUEsUUFBQ047UUFBb0JPLFFBQVFMO2tCQUMzQixjQUFBLFFBQUNKO1lBQWVHLFFBQVFBIn0=