import { v4 as uuidv4 } from "uuid";

export const generatedUuid: () => string = () => {
    return uuidv4();
}
