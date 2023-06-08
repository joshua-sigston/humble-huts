import { redirect } from "react-router";

export async function requireAuth() {
    const isLoggedIn = false;
    if(!isLoggedIn) {
        return redirect("/login")
    }
    return null;
};

// const loader = async () => {
//     const user = await getUser();
//     if (!user) {
//       return redirect("/login");
//     }
//     return null;
//   };