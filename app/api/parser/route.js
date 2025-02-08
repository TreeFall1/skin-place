// import { spawn } from 'child_process';
//
// export async function GET() {
//   return new Promise((resolve) => {
//     const pythonProcess = spawn('/msys64/mingw64/bin/python.exe', ['scripts/inventory-steamAPI.py'], { stdio: ['ignore', 'pipe', 'pipe'] });
//
//     let data = '';
//     let error = '';
//
//     pythonProcess.stdout.on('data', (chunk) => {
//       data += chunk.toString();
//     });
//
//     pythonProcess.stderr.on('data', (err) => {
//       error += err.toString();
//     });
//
//     pythonProcess.on('close', (code) => {
//       console.log('Python Output:', data);
//       console.error('Python Error:', error);
//       console.log('Python Exit Code:', code);
//
//       if (code === 0) {
//         try {
//           resolve(Response.json({ result: JSON.parse(data) }));
//         } catch (jsonError) {
//           resolve(Response.json({ error: 'Ошибка обработки JSON' }, { status: 500 }));
//         }
//       } else {
//         resolve(Response.json({ error: error || 'Ошибка выполнения Python-скрипта' }, { status: 500 }));
//       }
//     });
//   });
// }

import { spawn } from 'child_process';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const steamId = searchParams.get('steam_id');

  if (!steamId) {
    return Response.json({ error: 'Steam ID не указан' }, { status: 400 });
  }

  return new Promise((resolve) => {
    const pythonProcess = spawn('python.exe', ['scripts/inventory-steamAPI.py', steamId], { stdio: ['ignore', 'pipe', 'pipe'] });

    let data = '';
    let error = '';

    pythonProcess.stdout.on('data', (chunk) => {
      data += chunk.toString();
    });

    pythonProcess.stderr.on('data', (err) => {
      error += err.toString();
    });

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        try {
          resolve(Response.json(JSON.parse(data)));
        } catch (jsonError) {
          resolve(Response.json({ error: 'JSON error' }, { status: 500 }));
        }
      } else {
        resolve(Response.json({ error: error || 'Python error' }, { status: 500 }));
      }
    });
  });
}

