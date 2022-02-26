import { MySqlDeputyProvider } from "../../../providers/implementations/MySqlDeputyProvider";
import { FindDeputyController } from "./FindDeputyController";
import { FindDeputyUseCase } from "./FindDeputyUseCase";

const mySqlDeputyProvider = new MySqlDeputyProvider()

const findDeputyUseCase = new FindDeputyUseCase(
    mySqlDeputyProvider
)

const findDeputyController = new FindDeputyController(
    findDeputyUseCase
)

export { findDeputyUseCase, findDeputyController }