import pdfplumber

with pdfplumber.open("arquivo.pdf") as pdf:
    for page in pdf.pages:
        tables = page.extract_tables()

        for table in tables:
            for row in table:
                print(row)