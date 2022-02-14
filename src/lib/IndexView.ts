import { ipcRenderer, remote } from "electron";
import * as log from "electron-log";
import IPCEventType from "./Channels";
import { KeyState } from "./InputState";

const
    $btnMinimise = $("#btnMinimise"),
    $btnMaximise = $("#btnMaximise"),
    $btnQuit = $("#btnQuit"),
    $btnDevTools = $("#btnDevTools")
;

$(() => {
    KeyState.Init();
    $btnMinimise.on("click", (_e: JQuery.Event) =>        { remote.getCurrentWindow().minimize(); });
    $btnMaximise.on("click", (_e: JQuery.Event) =>        { (remote.getCurrentWindow().isMaximized()) ? remote.getCurrentWindow().unmaximize() : remote.getCurrentWindow().maximize(); });
    $btnQuit.on("click", (_e: JQuery.Event) =>            { ipcRenderer.send(IPCEventType.APP_QUIT); });
    $btnDevTools.on("click", (_e: JQuery.Event) =>        { ipcRenderer.send(IPCEventType.SHOW_DEV_TOOLS); });

    log.info(`Page Loaded...`);
});
