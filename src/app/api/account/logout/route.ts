// Pending Route
import { apiHandler } from "@/Utils/server/api";
import { cookies } from "next/headers";


module.exports = apiHandler({
  POST: logout,
});

function logout() {
  cookies().delete("authorization");
}
