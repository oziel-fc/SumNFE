import xml.etree.ElementTree as ET

def read_xml(file_path):

    tree = ET.parse(file_path)

    root = tree.getroot()

    for element in root.iter():

        if element.tag.endswith("vNF"):

            return float(element.text)

    return None