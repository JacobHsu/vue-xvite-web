<template>
    <div class="tx-pair-info">
        ftokenDetail
        <!-- <div class="t-item">
            <span class="symbol">
                {{ ftokenDetail ? ftokenDetail.symbol : '' }}
            </span> /
            <span class="symbol ttoken">
                {{ ttokenDetail ? ttokenDetail.symbol : '' }}
            </span>
        </div> -->
    </div>
</template>


<style lang="scss" scoped>
@import '../center.scss';

.tx-pair-info {
    position: relative;
}

.token-img {
    position: absolute;
    top: 6px;
    display: inline-block;
    img {
        display: inline-block;
        width: 28px;
        height: 28px;
        border-radius: 28px;
        border: 1px solid rgba(212,222,231,1);
        box-sizing: border-box;
    }
}

.t-item {
    display: inline-block;
    line-height: 14px;
    margin-left: 36px;
    font-size: 12px;
    @include font-family-bold();
    @include common_font_color();

    .symbol {
        position: relative;
        white-space: nowrap;
        line-height: 20px;
        &:first-child {
            font-size: 16px;
        }
        &.ttoken {
            [data-theme="0"] & {
                color: #5e6875;
            }
            [data-theme="1"] & {
                color: #545F75;
            }
        }
    }
    .mining {
        position: relative;
        color: $blue-color-1;
        .tips {
            display: none;
            @include font-family-normal();
        }
        &:hover {
            .tips {
                display: inline-block;
                @include font_color_1();
            }
        }
        img {
            margin-bottom: -2px;
            width: 14px;
            height: 14px;

        }
    }
    .zero-fee-icon {
        .tips {
            display: none;
            @include font-family-normal();
        }
        &:hover {
            .tips {
                display: inline-block;
                @include font_color_1();
            }
        }
        img {
            width: 18px;
            height: 10px;
            margin-bottom: 8px;
        }
    }
    .gate {
        @include font-family-normal();
        color: $blue-color-1;
        display: flex;
        margin-top: 2px;
        .gate-img {
            width: 14px;
            height: 14px;
            margin-bottom: -3px;
            margin-right: 4px;
            box-sizing: border-box;
            border-radius: 2px;
            [data-theme="0"] & {
                border: 1px solid rgba(212,222,231,1);
            }
        }
    }
}
</style>
