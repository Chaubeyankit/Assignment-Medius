import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  // Optimized calculation using useMemo
  const monthlyPayment = useMemo(() => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const months = parseInt(loanTerm) * 12;

    if (!principal || !rate || !months) return null;

    return rate === 0
      ? principal / months
      : (principal * rate) / (1 - Math.pow(1 + rate, -months));
  }, [loanAmount, interestRate, loanTerm]);

  return (
    <div className="max-w-3xl mx-auto space-y-12 p-6">
      {/* 🔵 SECTION 1: Mortgage Calculator */}
      <Card className="shadow-xl p-6">
        <CardHeader>
          <CardTitle className="text-2xl text-center font-bold">
            Mortgage Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Loan Amount Input */}
            <div>
              <label className="block font-medium text-gray-700">
                Loan Amount ($)
              </label>
              <Input
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
                placeholder="Enter loan amount"
              />
            </div>

            {/* Interest Rate Input */}
            <div>
              <label className="block font-medium text-gray-700">
                Interest Rate (%)
              </label>
              <Input
                type="number"
                step="0.01"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                placeholder="Enter interest rate"
              />
            </div>

            {/* Loan Term Input */}
            <div>
              <label className="block font-medium text-gray-700">
                Loan Term (Years)
              </label>
              <Input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                placeholder="Enter loan term"
              />
            </div>

            {/* Display Monthly Payment */}
            {monthlyPayment !== null && (
              <div className="mt-6 text-center p-4 bg-green-100 rounded-lg">
                <p className="text-lg font-semibold">
                  Estimated Monthly Payment:
                </p>
                <p className="text-2xl font-bold text-green-700">
                  ${monthlyPayment.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* 🔵 SECTION 2: How Mortgage Calculation Works */}
      <Card className="shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            How Mortgage Calculation Works
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            The mortgage formula calculates monthly payments based on the **loan
            amount, interest rate, and loan term**.
          </p>

          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold">Formula:</p>
            <p className="text-blue-700">
              M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1 ]
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>
                <strong>M</strong> = Monthly payment
              </li>
              <li>
                <strong>P</strong> = Loan amount
              </li>
              <li>
                <strong>r</strong> = Monthly interest rate (Annual Rate ÷ 12)
              </li>
              <li>
                <strong>n</strong> = Total number of payments (Loan term × 12)
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 🔵 SECTION 3: Taxes & Additional Costs */}
      <Card className="shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Taxes & Additional Costs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            Besides the principal and interest, mortgages often include
            **additional costs** such as:
          </p>

          {/* Tax Breakdown using Accordion */}
          <Accordion type="single" collapsible className="mt-4">
            <AccordionItem value="taxes">
              <AccordionTrigger>Property Taxes</AccordionTrigger>
              <AccordionContent>
                Most mortgages include **property tax payments** in monthly
                bills. The lender pays these taxes on behalf of the borrower.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="insurance">
              <AccordionTrigger>Homeowners Insurance</AccordionTrigger>
              <AccordionContent>
                Homeowners insurance protects your home and is usually required
                by lenders.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pmi">
              <AccordionTrigger>
                Private Mortgage Insurance (PMI)
              </AccordionTrigger>
              <AccordionContent>
                If your down payment is less than 20%, lenders may require PMI
                to protect against default.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
