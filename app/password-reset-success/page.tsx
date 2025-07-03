import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Password Reset Successful
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-600 text-center leading-relaxed">
            Your password has been successfully reset. You can now log in with
            your new password and continue using the app.
          </p>

          <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
            <Link href="/login">
              Go to Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Make sure to keep your new password secure
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
