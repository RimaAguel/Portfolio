import { Card, CardContent } from "./ui/card";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground">
            Ready to bring your next project to life? Let's
            connect and discuss opportunities.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Card className="w-full max-w-md">
            <CardContent className="p-6 flex items-center justify-center gap-4">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h4>Email</h4>
                <p className="text-muted-foreground">
                  rimaaguel@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}