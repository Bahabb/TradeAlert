import { z } from 'zod';
export declare const AlertItemTypeSchema: z.ZodObject<{
    id: z.ZodString;
    message: z.ZodString;
    timestamp: z.ZodString;
}, z.core.$strip>;
export type AlertItemType = z.infer<typeof AlertItemTypeSchema>;
export declare const DirSchema: z.ZodEnum<{
    bearish: "bearish";
    bullish: "bullish";
    neutral: "neutral";
}>;
export type Dir = z.infer<typeof DirSchema>;
export declare const MagnitudeSchema: z.ZodEnum<{
    moderate: "moderate";
    strong: "strong";
    weak: "weak";
}>;
export type Magnitude = z.infer<typeof MagnitudeSchema>;
export declare const MarketStructurePointSchema: z.ZodObject<{
    price: z.ZodNumber;
    type: z.ZodEnum<{
        EQH: "EQH";
        EQL: "EQL";
        HH: "HH";
        HL: "HL";
        LH: "LH";
        LL: "LL";
    }>;
    isSwept: z.ZodBoolean;
}, z.core.$strip>;
export type MarketStructurePoint = z.infer<typeof MarketStructurePointSchema>;
export declare const BiasSchema: z.ZodObject<{
    direction: z.ZodEnum<{
        bearish: "bearish";
        bullish: "bullish";
        neutral: "neutral";
    }>;
    strength: z.ZodEnum<{
        moderate: "moderate";
        strong: "strong";
        weak: "weak";
    }>;
}, z.core.$strip>;
export type Bias = z.infer<typeof BiasSchema>;
export declare const DealingRangeDataSchema: z.ZodObject<{
    premium: z.ZodNumber;
    equilibrium: z.ZodNumber;
    discount: z.ZodNumber;
    currentPositionPercentage: z.ZodNumber;
    summary: z.ZodString;
}, z.core.$strip>;
export type DealingRangeData = z.infer<typeof DealingRangeDataSchema>;
export declare const DrawOnLiquiditySchema: z.ZodObject<{
    targetName: z.ZodString;
    price: z.ZodNumber;
    status: z.ZodEnum<{
        ABOVE: "ABOVE";
        BELOW: "BELOW";
        REACHED: "REACHED";
    }>;
}, z.core.$strip>;
export type DrawOnLiquidity = z.infer<typeof DrawOnLiquiditySchema>;
export declare const PreviousCandleSchema: z.ZodObject<{
    direction: z.ZodEnum<{
        BEAR: "BEAR";
        BULL: "BULL";
    }>;
    open: z.ZodNumber;
    high: z.ZodNumber;
    low: z.ZodNumber;
    close: z.ZodNumber;
}, z.core.$strip>;
export type PreviousCandle = z.infer<typeof PreviousCandleSchema>;
export declare const FairValueGapSchema: z.ZodObject<{
    type: z.ZodEnum<{
        BEAR: "BEAR";
        BULL: "BULL";
    }>;
    low: z.ZodNumber;
    high: z.ZodNumber;
    status: z.ZodEnum<{
        MITIGATED: "MITIGATED";
        OPEN: "OPEN";
        PARTIAL: "PARTIAL";
    }>;
}, z.core.$strip>;
export type FairValueGap = z.infer<typeof FairValueGapSchema>;
export declare const OrderBlockSchema: z.ZodObject<{
    type: z.ZodEnum<{
        BEAR: "BEAR";
        BULL: "BULL";
    }>;
    low: z.ZodNumber;
    high: z.ZodNumber;
    status: z.ZodEnum<{
        active: "active";
        mitigated: "mitigated";
        tested: "tested";
    }>;
}, z.core.$strip>;
export type OrderBlock = z.infer<typeof OrderBlockSchema>;
export declare const LiquidityPoolSchema: z.ZodObject<{
    name: z.ZodString;
    price: z.ZodNumber;
    status: z.ZodEnum<{
        SWEPT: "SWEPT";
        TARGET: "TARGET";
    }>;
}, z.core.$strip>;
export type LiquidityPool = z.infer<typeof LiquidityPoolSchema>;
export declare const KeyLevelSchema: z.ZodObject<{
    label: z.ZodString;
    price: z.ZodNumber;
    type: z.ZodEnum<{
        EQ: "EQ";
        HIGH: "HIGH";
        LOW: "LOW";
    }>;
}, z.core.$strip>;
export type KeyLevel = z.infer<typeof KeyLevelSchema>;
export declare const KeyLevelsDataSchema: z.ZodObject<{
    priorWeekHigh: z.ZodNumber;
    priorDayHigh: z.ZodNumber;
    equilibrium: z.ZodNumber;
    priorDayLow: z.ZodNumber;
    priorWeekLow: z.ZodNumber;
}, z.core.$strip>;
export type KeyLevelsData = z.infer<typeof KeyLevelsDataSchema>;
export declare const ConfluenceMatrixSchema: z.ZodObject<{
    score: z.ZodNumber;
    maxScore: z.ZodNumber;
    rating: z.ZodEnum<{
        HIGH: "HIGH";
        LOW: "LOW";
        MODERATE: "MODERATE";
    }>;
}, z.core.$strip>;
export type ConfluenceMatrix = z.infer<typeof ConfluenceMatrixSchema>;
export declare const MarketRecapSchema: z.ZodObject<{
    dailyBias: z.ZodObject<{
        direction: z.ZodEnum<{
            bearish: "bearish";
            bullish: "bullish";
            neutral: "neutral";
        }>;
        strength: z.ZodEnum<{
            moderate: "moderate";
            strong: "strong";
            weak: "weak";
        }>;
    }, z.core.$strip>;
    activeSession: z.ZodString;
    nextKillZone: z.ZodString;
    marketSequence: z.ZodArray<z.ZodObject<{
        price: z.ZodNumber;
        type: z.ZodEnum<{
            EQH: "EQH";
            EQL: "EQL";
            HH: "HH";
            HL: "HL";
            LH: "LH";
            LL: "LL";
        }>;
        isSwept: z.ZodBoolean;
    }, z.core.$strip>>;
    dealingRange: z.ZodObject<{
        premium: z.ZodNumber;
        equilibrium: z.ZodNumber;
        discount: z.ZodNumber;
        currentPositionPercentage: z.ZodNumber;
        summary: z.ZodString;
    }, z.core.$strip>;
    keyLevels: z.ZodObject<{
        priorWeekHigh: z.ZodNumber;
        priorDayHigh: z.ZodNumber;
        equilibrium: z.ZodNumber;
        priorDayLow: z.ZodNumber;
        priorWeekLow: z.ZodNumber;
    }, z.core.$strip>;
    drawOnLiquidity: z.ZodObject<{
        targetName: z.ZodString;
        price: z.ZodNumber;
        status: z.ZodEnum<{
            ABOVE: "ABOVE";
            BELOW: "BELOW";
            REACHED: "REACHED";
        }>;
    }, z.core.$strip>;
    previousCandle: z.ZodObject<{
        direction: z.ZodEnum<{
            BEAR: "BEAR";
            BULL: "BULL";
        }>;
        open: z.ZodNumber;
        high: z.ZodNumber;
        low: z.ZodNumber;
        close: z.ZodNumber;
    }, z.core.$strip>;
    fairValueGaps: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            BEAR: "BEAR";
            BULL: "BULL";
        }>;
        low: z.ZodNumber;
        high: z.ZodNumber;
        status: z.ZodEnum<{
            MITIGATED: "MITIGATED";
            OPEN: "OPEN";
            PARTIAL: "PARTIAL";
        }>;
    }, z.core.$strip>>;
    orderBlocks: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<{
            BEAR: "BEAR";
            BULL: "BULL";
        }>;
        low: z.ZodNumber;
        high: z.ZodNumber;
        status: z.ZodEnum<{
            active: "active";
            mitigated: "mitigated";
            tested: "tested";
        }>;
    }, z.core.$strip>>;
    liquidityPools: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        price: z.ZodNumber;
        status: z.ZodEnum<{
            SWEPT: "SWEPT";
            TARGET: "TARGET";
        }>;
    }, z.core.$strip>>;
    confluenceMatrix: z.ZodObject<{
        score: z.ZodNumber;
        maxScore: z.ZodNumber;
        rating: z.ZodEnum<{
            HIGH: "HIGH";
            LOW: "LOW";
            MODERATE: "MODERATE";
        }>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type MarketRecapData = z.infer<typeof MarketRecapSchema>;
//# sourceMappingURL=types.d.ts.map