import IndexLayout from "../Layouts/IndexLayout";
import PageLayout from "../Layouts/PageLayout";
import { createBrowserRouter } from "react-router-dom";
import TestPage from "./TestPage/TestPage";
export const router = createBrowserRouter([

    {
        path: "/",
        element: <IndexLayout />,

    },

    {
        path: "/",
        element: <PageLayout />,
        children: [
            {
                path: `/perfil-de-inversor`,
                element: <TestPage />,
            },

        ],
    },


]);
