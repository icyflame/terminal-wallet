## Specification for this module

This is a really old text file that I found lying around the project
directory. It was writen before even a single line of code for this module was written.

Of this SPEC, the first section is done. The second section is pending, and meanwhile,
the development continues on the module `relative-date-reverse`.

- wallet debit <number> <reason> -c <category>
- wallet credit <number> <source> -c <category>
- wallet stats
  - show balance
  - show money lent
  - show money borrowed

#### Later

- wallet io <name> <number>
- wallet paid <name> <number>
  Paid money to this person. If old debts, then resolve them,
  else create a new loan to this person. (If a mixture, create a
  loan of the difference amount.)

### CSV Format

#### expenses.CSV

date; reason; category; credit; debit;
