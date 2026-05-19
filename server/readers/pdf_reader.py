import pdfplumber

def format_total_value(value):

    value = value.split("\n")[-1]

    if " " in value:

        value = value.split()

        numbers = [
            float(item.replace(",", "."))
            for item in value
        ]

        value = max(numbers)

    else:
        value = float(value.replace(",", "."))

    return value


def read_pdf(file_path):

    with pdfplumber.open(file_path) as pdf:

        for page in pdf.pages:

            tables = page.extract_tables()

            for table in tables:
                for row in table:

                    if not row:
                        continue

                    for index, item in enumerate(row):

                        if not item:
                            continue

                        if "VALOR DO IPI" not in item:
                            continue

                        if index + 1 >= len(row):
                            continue

                        next_item = row[index + 1]

                        if not next_item:
                            continue

                        total_value = format_total_value(next_item)

                        return total_value

    return None