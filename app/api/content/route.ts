import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

export async function GET() {
  try {
    if (fs.existsSync(contentPath)) {
      const data = fs.readFileSync(contentPath, 'utf8');
      return NextResponse.json(JSON.parse(data));
    }
    return NextResponse.json({});
  } catch (error) {
    console.error("Error reading content:", error);
    return NextResponse.json({});
  }
}

export async function POST(req: Request) {
  if (process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Only allowed in development' }, { status: 403 });
  }
  try {
    const data = await req.json();
    if (!fs.existsSync(path.dirname(contentPath))) {
      fs.mkdirSync(path.dirname(contentPath), { recursive: true });
    }
    fs.writeFileSync(contentPath, JSON.stringify(data, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 });
  }
}
