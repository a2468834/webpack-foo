import { Buffer } from 'buffer';
import { Blockchain, Executor, IExecutor } from '@ton/sandbox';
import { beginCell, Cell } from '@ton/core';

export async function txnEmulator(a: number): Promise<string> {
    const blockchain = await Blockchain.create();
    // const executor = blockchain.executor;

    const result: Cell = beginCell()
        .storeUint(a, 16)
        .storeUint(0, 8)
        .endCell();

    return result.toBoc().toString("base64");
}

