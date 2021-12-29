import { container } from "tsyringe";
import SampleDAO from './dao/SampleDAO'

export const sampleDAO: SampleDAO = container.resolve(SampleDAO);