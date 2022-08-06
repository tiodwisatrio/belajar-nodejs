// Report merupakan fitur yang terdapat di NodeJS utk membuat laporan secara otomatis dalam file ketika terjadi sesuatu pada aplikasi NodeJS kita.
// Report dalam bentuk JSON

import process from "process";

// Error pada aplikasi nodejs
process.report.reportOnFatalError = true;
process.report.reportOnUncaughtException = true;
process.report.reportOnSignal = true;
process.report.filename = "report.json";

function sampleError() {
    throw new Error("Upsss");
}

sampleError();