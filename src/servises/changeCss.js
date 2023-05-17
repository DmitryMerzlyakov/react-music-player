export const changeCss = theme => {
    const root = document.querySelector(':root')

    root.style.setProperty('--background-color-default', `var(--background-color-${theme})`);
    root.style.setProperty('--color-text-default', `var(--color-text-${theme})`);
    root.style.setProperty('--background-image-default', `var(--background-image-${theme})`);
    root.style.setProperty('--background-trackBar-default', `var(--background-trackBar-${theme})`);
    root.style.setProperty('--background-colorNav-default', `var(--background-colorNav-${theme})`);
    root.style.setProperty('--background-choose-default', `var(--background-choose-${theme})`);
    root.style.setProperty('--background-imgChoose-default', `var(--background-imgChoose-${theme})`);

}

