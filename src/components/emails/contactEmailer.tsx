import { Html, Button, Text } from '@react-email/components';

interface EmailerProps {
    name?: string;
    mobile?: string;
    email?: string;
    message?: string;
  }

export default function contactEmailer(EmailerProps: any) {
  return (
    <Html>
      <Text>Name: {EmailerProps.name},</Text>
      <Text>Mobile: {EmailerProps.mobile},</Text>
      <Text>Email: {EmailerProps.email},</Text>
      <Text>Message: {EmailerProps.message}</Text>
      <Button
        href="https://starwebmakerai.vercel.app"
        style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
      >
        Star Web Maker AI
      </Button>
    </Html>
  );
}