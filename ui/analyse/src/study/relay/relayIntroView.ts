import { h } from 'snabbdom';
import { VNode } from 'snabbdom/vnode';
import AnalyseCtrl from '../../ctrl';
import { richHTML } from '../../util';
import { view as multiBoardView } from '../multiBoard';

export default function(ctrl: AnalyseCtrl): VNode | undefined {
  const study = ctrl.study;
  const relay = study && study.relay;
  if (study && relay && relay.intro.active) return h('div.intro', [
    h('div.intro__text', [
      h('h1', study.data.name),
      h('div', {
        hook: richHTML(relay.data.description || '')
      })
    ]),
    multiBoardView(study.multiBoard, study)
  ]);
}
