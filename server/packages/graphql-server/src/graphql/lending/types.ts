import { builder } from "../schema-builder.js";
import type { LoanRecord } from "../types.js";

export interface StartLoanInput {
  member_ident: string;
  book_copy_barcode: string;
}

export const LoanRecordRef = builder
  .objectRef<LoanRecord>("LoanRecord")
  .implement({
    fields: (t) => ({
      loan_number: t.exposeString("loan_number"),
      dt_created: t.exposeString("dt_created"),
      dt_modified: t.exposeString("dt_modified"),
      dt_due: t.exposeString("dt_due", { nullable: true }),
      dt_returned: t.exposeString("dt_returned", { nullable: true })
    })
  });

type ImplementedInputRef<T extends object> = ReturnType<
  ReturnType<typeof builder.inputRef<T>>["implement"]
>;

export const StartLoanInputRef: ImplementedInputRef<StartLoanInput> = builder
  .inputRef<StartLoanInput>("StartLoanInput")
  .implement({
    fields: (t) => ({
      member_ident: t.string({ required: true }),
      book_copy_barcode: t.string({ required: true })
    })
  });
