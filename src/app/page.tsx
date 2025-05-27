'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isValidUrl = (string: string) => {
    try {
      const parsed = new URL(string);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
    } catch (_) {
      return false;
    }
  };

  const handleShorten = async () => {
    if (!isValidUrl(url)) {
      toast.warning('⚠️ Invalid URL', {
        description: 'Please enter a valid URL starting with http:// or https://',
      });
      return;
    }

    setIsLoading(true);
    setShortUrl('');
    toast.info('📄 Processing URL', {
      description: 'Hang tight, shortening your URL ✨',
    });

    try {
      const res = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();

      if (res.ok) {
        setShortUrl(data.shortUrl);
        toast.success('📄 New URL generated!', {
          description: 'Your URL has been shortened successfully!',
        });
      } else {
        toast.error('❌ Something went wrong', {
          description: data.message || 'Unable to shorten URL',
        });
      }
    } catch (err) {
      toast.error('🚨 Error occurred', {
        description: 'Could not connect to the server',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6">
        <CardContent className="space-y-4">
          <h1 className="text-2xl font-bold">Short URL Generator</h1>
          <Input
            placeholder="Paste your long URL here..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isLoading}
          />
          <Button onClick={handleShorten} disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              'Shorten'
            )}
          </Button>
          {shortUrl && (
            <p>
              Short URL:{' '}
              <a
                href={shortUrl}
                className="text-blue-600 underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortUrl}
              </a>
            </p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
