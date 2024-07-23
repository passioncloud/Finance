// using Microsoft.EntityFrameworkCore;
// using Microsoft.Rest.ClientRuntime.Azure.Authentication.Utilities;
// using Api.Models;
// using Api.Utilities;
// using Microsoft.AspNetCore.Identity;

// namespace Api.Services;

// public class PostCashReceiptJournalService(ApiDbContext apiDbContext, NoSeriesService noSeriesService, IHttpContextAccessor httpContextAccessor)
// {
//     private string GetUsername()
//     {
//         HttpContext httpContext = httpContextAccessor.HttpContext;
//         return httpContext.User.Identity.Name;
//     }
//     public void PostCashReceiptJournal()
//     {
//         string CreatedBy = GetUsername();
//         List<CashReceiptJournalLine> lines = apiDbContext.GenJournalLines
//             .Include(c => c.Bank)
//             .Include(c => c.Customer)
//             .Where(c => c.CreatedBy == CreatedBy)
//             .ToList();

//         foreach (CashReceiptJournalLine line in lines)
//         {
//             PostCashReceiptJournalLine(line);
//         }

//         apiDbContext.SaveChanges();
//     }

//     private void PostCashReceiptJournalLine(CashReceiptJournalLine line)
//     {
//         CheckFields(line);

//         // a customer ledger entry for an invoice contributes to the accounts receivable
//         // the accounts receivable accounts belong to the assets section on the balance sheet
//         // this means that amounts like invoices that increase the receivable figure are positive
//         // where as amounts like customer cash receipt that decreate the receivables figure are negative
//         // we expect the account to be usually positive since we expect to be demanding our customers rather than them demanding money from us. 
//         // create customer ledger entry 
//         CustomerLedgerEntry customerLedgerEntry = new()
//         {
//             DocumentNo = line.DocumentNo,
//             Amount = -line.Amount,
//             RemainingAmount = 0,
//             CustomerNo = line.CustomerNo!,
//             CustomerName = line.Customer.Name,
//             PostingDate = line.PostingDate,
//             Description = line.Description,
//             DocumentType = "Payment",
//             Open = true,
//             CreatedBy = GetUsername(),
//         };
//         apiDbContext.CustomerLedgerEntries.Add(customerLedgerEntry);

//         // create bank ledger entry 
//          BankLedgerEntry bankLedgerEntry = new()
//         {
//             DocumentNo = line.DocumentNo,
//             Amount = line.Amount,
//             BankNo = line.BankNo!,
//             BankName = line.Bank.Name,
//             PostingDate = line.PostingDate,
//             Description = line.Description,
//             Open = true,
//             CreatedBy = GetUsername(),
//         };
//         apiDbContext.BankLedgerEntries.Add(bankLedgerEntry);

//         apiDbContext.CashReceiptJournalLines.Remove(line);
//     }

//     public void CheckFields(CashReceiptJournalLine line)
//     {
//         Check.NotNull(line.CustomerNo);
//         Check.NotNull(line.BankNo);
//         Check.NotEmptyNotNull(line.DocumentNo);
//         Check.NotEmptyNotNull(line.CreatedBy);
//         if (line.Amount < 0)
//         {
//             throw new Exception($"Amount in line {line.Id} with Document No {line.DocumentNo} must be greater than zero");
//         }
//     }
// }