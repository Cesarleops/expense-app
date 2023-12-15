
type ExpenseType = 'Entertainment' | 'Education' | 'Self Care' | 'Others' | 'Investment';

interface Expense {
    date: string,
    name: string,
    type: ExpenseType,
    price: number,
    payment_method: 'Card' | 'Cash',
    type_of_charge:  'Monthly' | 'Weekly' | 'Yearly' | 'Daily'
    location: string
    payment_status: string
}