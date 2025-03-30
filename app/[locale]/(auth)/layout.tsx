"use client"

import {AuthProvider} from "@/context/auth-context";
import AuthEventComponent from "@/services/auth-event-component";

export default function Layout({
               children,
           }: Readonly<{
    children: React.ReactNode;
}>) {

   return(
       <AuthProvider>
           {children}
           <AuthEventComponent />

       </AuthProvider>
   )

}