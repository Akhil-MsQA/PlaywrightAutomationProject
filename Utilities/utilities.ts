import path from 'path';
import * as XLSX from 'xlsx';

export function generateRandomEmail(domain: string = "example.com"): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  const randomString = Array.from({ length: 8 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");

  return `${randomString}@${domain}`;
}

export function readExcelData<T extends Record<string, unknown> = Record<string, unknown>>(
  fileName: string = 'Data.xlsx',
  sheetName?: string,
): T[] {
  const workbookPath = path.resolve(__dirname, '..', 'data', fileName);
  const workbook = XLSX.readFile(workbookPath);
  const worksheetName = sheetName ?? workbook.SheetNames[0];

  if (!worksheetName) {
    throw new Error(`No worksheets found in ${fileName}`);
  }

  const worksheet = workbook.Sheets[worksheetName];

  if (!worksheet) {
    throw new Error(`Worksheet ${worksheetName} was not found in ${fileName}`);
  }

  return XLSX.utils.sheet_to_json<T>(worksheet, { defval: '' });
}
