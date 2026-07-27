# RIC Development publishing instructions

## FTP deployment

- FTP host: `ftp.ricdevelopment.co.za`
- FTP username: `mnghclrq`
- Website document root: `/domains/ricdevelopment.co.za/public_html/`
- Upload mode: passive FTP; upload files in binary mode where supported.
- The live site is `https://www.ricdevelopment.co.za/`.

The FTP password is intentionally not stored in this repository or in this file. It is stored in Windows Credential Manager under the target `ftp.ricdevelopment.co.za`. Do not print, commit, or add the password to scripts, logs, or chat messages.

### Publishing a change

1. Confirm the exact local files that changed and preserve unrelated working-tree edits.
2. Connect to `ftp.ricdevelopment.co.za` using the Windows Credential Manager entry.
3. Upload only the intended files beneath `/domains/ricdevelopment.co.za/public_html/`.
4. Download each uploaded file or otherwise compare its remote size/hash with the local file.
5. Validate the affected live URL(s) over HTTPS.

Do not delete remote files unless the user explicitly grants permission. Never use SQL `DELETE` or `TRUNCATE` as part of publishing.
