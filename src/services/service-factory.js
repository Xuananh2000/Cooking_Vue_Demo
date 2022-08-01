import AuthService from "./auth.service";

import MassManagementService from "./mass-management.service";
import MasterService from "./master.service";
import MasterDataService from "./master-data.service";
const services = {
    master: new MasterService(),
    massManagement: new MassManagementService(),
    auth: new AuthService(),
    masterData: new MasterDataService(),
}

export const ServiceFactory = {
    get: name => services[name]
}
