import { createContext } from "react";

import User from "models/User";

const historyContext = createContext<User[]>([]);

export default historyContext;
