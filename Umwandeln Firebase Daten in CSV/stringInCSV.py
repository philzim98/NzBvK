import urllib.parse
import csv
import sys

def decode_and_save_to_csv(filename, output_filename):
    with open(filename, 'r') as f:
        encoded_text = f.read().strip()

    decoded_text = urllib.parse.unquote(encoded_text)

    lines = decoded_text.split('\r\n')

    with open(output_filename, 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)

        for line in lines:
            fields = line.split(',')
            writer.writerow(fields)

def main():
    if len(sys.argv) != 3:
        print('Usage: python script.py <input_filename> <output_filename>')
        return

    filename = sys.argv[1]
    output_filename = sys.argv[2]

    decode_and_save_to_csv(filename, output_filename)

if __name__ == '__main__':
    main()
