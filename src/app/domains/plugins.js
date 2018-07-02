import { plugin as auth } from "./auth";
import { plugin as http } from "./http";

const plugins = [http, auth];

export default plugins;
