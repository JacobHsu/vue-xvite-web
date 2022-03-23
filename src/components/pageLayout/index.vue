<template>
  <div class="hello">
        <div class="page-content">
            <div class="page-scroll-wrapper">
                <div class="page-wrapper">
                    <slot></slot>
                </div>
            </div>
        </div>
  </div>
</template>

<style lang="scss">
.page-layout-wrapper {
    .sidebar {
        -webkit-app-region: drag;
        .__pointer {
            -webkit-app-region: no-drag;
        }
    }
    .second-menu {
        -webkit-app-region: drag;
        .__pointer {
            -webkit-app-region: no-drag;
        }
    }
}

</style>

<style lang="scss" scoped>
$white-color: #fff;
$black-color-3: #01081F;

@mixin bg_color_3() {
    [data-theme="0"] & {
        background-color: $white-color;
    }
    [data-theme="1"] & {
        background-color: $black-color-3;
    }
}

.dex .page-layout-wrapper .page-content {
    .page-scroll-wrapper .page-wrapper {
        height: calc(100% - 60px);
    }
}

.page-layout-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    @include bg_color_3();
    overflow: auto;

    .sidebar {
        width: 50px;
    }

    .page-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
        overflow: auto;

        .page-scroll-wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            min-width: 1350px;
            .assets{
                padding: 0 10px;
            }
        }

        .page-wrapper {
            flex: 1;
            padding: 10px;
            box-sizing: border-box;
        }
    }
}
</style>

