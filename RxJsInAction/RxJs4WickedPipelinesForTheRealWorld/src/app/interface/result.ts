import { Error } from "./error";

export interface Result<T> {
    isSuccess: boolean,
    result: T | null,
    error: Error | null
}
