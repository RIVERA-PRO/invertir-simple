import IndexLayout from "../Layouts/IndexLayout";
import PageLayout from "../Layouts/PageLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import TestPage from "./TestPage/TestPage";
import Usuarios from '../Pages/Usuarios/Usuarios'
import Main from "./Main/Main";
import Consultas from './Consultas/Consultas'
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
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: `/dashboard`,
                element: <Main />,
            },

            {
                path: `/dashboard/usuarios`,
                element: <Usuarios />,
            },

            {
                path: `/dashboard/consultas`,
                element: <Consultas />,
            },
        ],
    },


]);
