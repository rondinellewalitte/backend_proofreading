import { prisma } from "../../../../database/prismaClient";

interface IUpdateStudentTest {
  id: string;
  id_client: string;
  answer_01?: string;
  answer_02?: string;
  answer_03?: string;
  answer_04?: string;
  answer_05?: string;
  answer_06?: string;
  answer_07?: string;
  answer_08?: string;
  answer_09?: string;
  answer_10?: string;
  answer_11?: string;
  answer_12?: string;
  answer_13?: string;
  answer_14?: string;
  answer_15?: string;
  answer_16?: string;
  answer_17?: string;
  answer_18?: string;
  answer_19?: string;
  answer_20?: string;
  answer_21?: string;
  answer_22?: string;
  answer_23?: string;
  answer_24?: string;
  answer_25?: string;
  answer_26?: string;
  answer_27?: string;
  answer_28?: string;
  answer_29?: string;
}

export class UpdateStudentTestUseCase {
  async execute({
    id,
    id_client,
    answer_01,
    answer_02,
    answer_03,
    answer_04,
    answer_05,
    answer_06,
    answer_07,
    answer_08,
    answer_09,
    answer_10,
    answer_11,
    answer_12,
    answer_13,
    answer_14,
    answer_15,
    answer_16,
    answer_17,
    answer_18,
    answer_19,
    answer_20,
    answer_21,
    answer_22,
    answer_23,
    answer_24,
    answer_25,
    answer_26,
    answer_27,
    answer_28,
    answer_29,
  }: IUpdateStudentTest) {
    const result = await prisma.test.update({
      where: {
        id,
      },
      data: {
        id_client,
        answer_01,
        answer_02,
        answer_03,
        answer_04,
        answer_05,
        answer_06,
        answer_07,
        answer_08,
        answer_09,
        answer_10,
        answer_11,
        answer_12,
        answer_13,
        answer_14,
        answer_15,
        answer_16,
        answer_17,
        answer_18,
        answer_19,
        answer_20,
        answer_21,
        answer_22,
        answer_23,
        answer_24,
        answer_25,
        answer_26,
        answer_27,
        answer_28,
        answer_29,
      },
    });
    return result;
  }
}
