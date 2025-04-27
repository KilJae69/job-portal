

import { TContactFormSchema } from "@/lib/contactSchema";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,

} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";


export default function ContactFormEmail({
  firstName,
  lastName,
  email,
  phone,
  message,
 
}: TContactFormSchema) {
  return (
    <Html>
      <Head />
      <Preview>Nova poruka od {firstName}{" "}{lastName}</Preview>
      <Tailwind>
        <Body className="bg-primary-50 text-black font-sans">
          <Container className="mx-auto my-6 max-w-xl rounded-md bg-white p-6 shadow-lg">
            
          
            
            <Section>
              <Heading className="text-slate-800 text-xl font-semibold text-center">
                Nova poruka od {firstName} {lastName}
              </Heading>
              <Hr className="my-4 border-t border-gray-300" />
              <Text className="text-slate-700 leading-relaxed">
                <strong>Poruka:</strong>
                <br />
                {message}
              </Text>
              <Hr className="my-4 border-t border-gray-300" />
              <Text className="text-slate-700">
                <strong>Email pošiljaoca:</strong> {email}
              </Text>
              <Text className="text-slate-700">
                <strong>Kontakt broj:</strong> {phone}
              </Text>
              <Hr className="my-4 border-t border-gray-300" />
              <Text className="text-center text-slate-500 text-sm">
                Ova poruka je poslana putem kontakt forme na vašoj web stranici.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
