<script lang="ts">
import Icon from "@iconify/svelte";
import { onMount } from "svelte";

let showModal = false;

let isExpanded = false;
let component: HTMLElement;

function handleDropDownButtonClick() {
    isExpanded = !isExpanded;
}

function handleOutsideClick(event: MouseEvent) {
    if (component && !component.contains(event.target as Node)) {
        isExpanded = false;
    }
}

onMount(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
        document.removeEventListener("click", handleOutsideClick);
    };
});

function portal(node: HTMLElement) {
	document.body.appendChild(node);
	return {
		destroy() {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
			}
		},
	};
}

function closeModal() {
	showModal = false;
}

function handleExportWebStyle() {
    showModal = false;
    // 保留网页原始样式，直接打印
    window.print();
}

function handleExportPaperStyle() {
    showModal = false;
    // 切换到论文排版样式再打印
    
    document.documentElement.classList.add('paper-pdf');
    document.documentElement.style.setProperty('--card-bg', '#ffffff');
    document.documentElement.style.setProperty('--deep-text', '#000000');
    window.print();
    // 恢复原来的变量值和样式
    document.documentElement.classList.remove('paper-pdf');
    document.documentElement.style.removeProperty('--card-bg');
    document.documentElement.style.removeProperty('--deep-text');
}
</script>

<div id="post-page-header-dropdown-component" class="group w-12 justify-end" data-dropdown bind:this={component}>
    <button id="post-page-header-dropdown-button"
        class="btn-plain scale-animation rounded-lg h-11 font-bold w-full active:scale-95 dropdown-trigger flex items-center justify-center lg:justify-center whitespace-nowrap"
        on:click={handleDropDownButtonClick}>
        <Icon
            icon="material-symbols:more-vert" width="20" height="20"
        />
    </button>

    <div id="post-page-header-dropdown-menu" class="dropdown-menu" class:show={isExpanded}>
        <div id="post-page-header-dropdown-content">
            <button id="post-page-header-dropdown-item" 
                class="btn-plain scale-animation"
                on:click={() => showModal = true}>
                <div class="flex items-center">
                    <Icon
                        icon="material-symbols:picture-as-pdf" class="pr-2" width="20" height="20"/>
                    <span>Export as PDF document</span>
                </div>
            </button>
        </div>
    </div>
</div>

{#if showModal}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div use:portal id="export-pdf-modal" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" on:click={closeModal}>
        <div class="bg-[var(--card-bg)] rounded-[var(--radius-large)] p-6 w-[90%] max-w-3xl" on:click|stopPropagation>
            <h2 class="text-xl font-bold mb-4 dark:text-white/75">Export PDF</h2>
            <button class="btn-plain px-4 py-2 rounded-lg mb-4 flex justify-start w-full" on:click={handleExportWebStyle}>
                <div class="flex flex-col items-start py-2 px-2">
                    <div class="text-xl font-bold pb-3">以原网页样式为标准导出PDF</div>
                    <div>使用网页中的主题颜色、背景图形、字体等，保留原始网页样式</div>
                </div>
            </button>
            <button class="btn-plain px-4 py-2 rounded-lg mb-4 flex justify-start w-full" on:click={handleExportPaperStyle}>
                <div class="flex flex-col items-start py-2 px-2">
                    <div class="text-xl font-bold pb-3">以正规论文、设计排版为标准导出PDF</div>
                    <div>使用专业的论文和设计排版样式导出PDF</div>
                </div>
            </button>
        </div>
    </div>
{/if}

<style>
    #post-page-header-dropdown-component {
        @apply relative;
    }

	#post-page-header-dropdown-menu {
		@apply absolute top-full left-[-19rem] opacity-0 invisible pointer-events-none transition-all duration-200 ease-out;
	}

    #post-page-header-dropdown-menu.show{
		@apply opacity-100 visible pointer-events-auto translate-y-0;
	}

    #post-page-header-dropdown-content {
		@apply bg-[var(--float-panel-bg)] rounded-[var(--radius-large)] shadow-xl dark:shadow-none border border-black/5 dark:border-white/10 p-2 w-[22rem];
	}

	#post-page-header-dropdown-item {
		@apply flex items-center justify-between w-full px-4 py-2.5 transition-colors duration-150 font-medium rounded-lg;
	}
</style>