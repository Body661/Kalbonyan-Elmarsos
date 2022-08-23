import { Storage } from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';

export async function s3Upload(file) {
    const filename = `${uuidv4()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type,
    });

    return stored.key;
}