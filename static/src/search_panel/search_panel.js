/** @odoo-module **/

import { _t } from "@web/core/l10n/translation";
import { patch } from "@web/core/utils/patch";
import { SearchPanel } from "@web/search/search_panel/search_panel";
import { onMounted ,useRef} from "@odoo/owl";
export class SearchPanelRegular extends SearchPanel {
    static template = "resizeable_sidebar.SearchPanelContent";
    setup(){
        super.setup()
        onMounted(() => {
            if (!this.env.isSmall) {
                this.initResizeUse();
            }
        });
    }
    initResizeUse() {
        const resizer = this.root.al.querySelection(".resizer");
        let x = 0;
        let w = 0;

        const mouseDownHandler = (e) => {
            x = e.clientX;
            const styles = window.getComputedStyle(this.root.al);
            w = parseInt(styles.width, 10);

            document.addEventListener("mousemove", mouseMoveHandler);
            document.addEventListener("mouseup", mouseUpHandler);
        };

        const mouseMoveHandler = (e) => {
            const dx = e.clientX - x;
            const newWidth = w - dx;
            document.documentElement.style.setProperty('--searchpanel-width', `${newWidth}px`);
        };

        const mouseUpHandler = () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseup", mouseUpHandler);
        };

        resizer.addEventListener("mousedown", mouseDownHandler);
    }
}

