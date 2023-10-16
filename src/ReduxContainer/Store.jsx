import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./LoginReducer";

const Store=configureStore({reducer:LoginReducer});

export default Store;