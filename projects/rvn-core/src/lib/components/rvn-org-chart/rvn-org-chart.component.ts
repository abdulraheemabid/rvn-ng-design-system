import { Component, Input, OnInit } from '@angular/core';
import { isNullOrUndefined } from '../../utils/funtions.util';
import { OrgChartNode, RvnOrgChartInput } from './rvn-org-chart.input';


@Component({
  selector: 'rvn-org-chart',
  templateUrl: './rvn-org-chart.component.html',
  styleUrls: ['./rvn-org-chart.component.scss']
})
export class RvnOrgChartComponent implements OnInit {

  constructor() { }

  @Input() config: RvnOrgChartInput = {} as any;
  initDone: boolean = false;

  ngOnInit(): void {
    if (isNullOrUndefined(this.config)) this.config = {} as any;
    if (isNullOrUndefined(this.config.keyForLabel)) this.config.keyForLabel = Object.keys(this.config.data)[0];

    this.handleRoot();
    this.handleChildren(this.config.data?.children);
  }

  handleRoot() {
    if (this.config.useLookUpWithId && !isNullOrUndefined(this.config.lookUpData))
      this.config.data.label = this.config.lookUpData.filter(lk => lk.id == this.config.data.id)[0][this.config.keyForLabel];
    else
      this.config.data.label = this.config.data[this.config.keyForLabel].toString();

    let styleClassesForRoot = ["rvn-org-chart-node", "rvn-org-chart-root-node"];
    if (!isNullOrUndefined(this.config.data?.styleClass)) styleClassesForRoot.push(this.config.data?.styleClass)
    if (!isNullOrUndefined(this.config.rootStyleClass)) styleClassesForRoot.push(this.config.rootStyleClass)
    if (isNullOrUndefined(this.config?.expandAll)) {
      this.config.expandAll = true;
      this.config.data.expanded = true;
    }
    this.config.data.styleClass = styleClassesForRoot.join(" ");

  }

  handleChildren(children: OrgChartNode[]) {
    children.forEach((item: any) => {
      const isLeaf = isNullOrUndefined(item?.children) || item?.children?.length === 0;

      let styleClasses = ["rvn-org-chart-node", "rvn-org-chart-leaf-node"];
      if (this.config.useLookUpWithId && !isNullOrUndefined(this.config.lookUpData))
        item.label = this.config.lookUpData.filter(lk => lk.id == item.id)[0][this.config.keyForLabel];
      else
        item.label = item[this.config.keyForLabel].toString();

      if (this.config.expandAll) item.expanded = true;
      if (!isNullOrUndefined(item.styleClass)) styleClasses.push(item.styleClass)
      if (isLeaf && !isNullOrUndefined(this.config?.leafStyleClass)) styleClasses.push(this.config.leafStyleClass);
      item.styleClass = styleClasses.join(" ");

      if (!isLeaf) this.handleChildren(item?.children);

    })
  }

}
