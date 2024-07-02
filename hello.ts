import { get } from 'radash';
import { Paths } from 'type-fest';

type Data = {
    aaa: {
        bbb: {
            ccc: string
        }[]
    }
}

const data: Data = {
    aaa: {
        bbb: [
            {
                ccc: 'ccc1'
            },
            {
                ccc: 'ccc2'
            }
        ]
    }
}

function hello(path: Paths<Data>) {
    console.log("value", get(data, path));
}

hello('aaa.bbb.0.ccc');
