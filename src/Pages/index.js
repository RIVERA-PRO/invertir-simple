import IndexLayout from "../Layouts/IndexLayout";
import PageLayout from "../Layouts/PageLayout";
import MainLayout from "../Layouts/MainLayout";
import ClientePage from "../Layouts/ClientePage";
import { createBrowserRouter } from "react-router-dom";
import TestPage from "./TestPage/TestPage";
import Usuarios from '../Pages/Usuarios/Usuarios'
import Main from "./Main/Main";
import Consultas from './Consultas/Consultas'
import CalculaPage from "./CalculaPage/CalculaPage";
import Videos from "./Videos/Videos";
import Banners from "./Banners/Banners";
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
            {
                path: `/calcula-tu-ahorro`,
                element: <CalculaPage />,
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
                path: `/dashboard/banners`,
                element: <Banners />,
            },
            {
                path: `/dashboard/consultas`,
                element: <Consultas />,
            },
            {
                path: `/dashboard/videos`,
                element: <Videos />,
            },
        ],
    },

    {
        path: "/",
        element: <ClientePage />,
        children: [
            {
                path: `/cliente`,
                element: <Main />,
            },



        ],
    },


]);
