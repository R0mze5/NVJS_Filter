'use strict';

function NVJSFilter(config, ...configAtributes) {
	
	let filterButtons;
	let filterButtonsTargetData = 'data-filter';
	let filterButtonActiveClass = 'active';

	let filterBlocks;
	let filterBlockActiveClass = 'shown';
	let filterBlockTargetData = 'data-tags';

	let container = document.body;

	let autoSetFirstFilter = true;
	let letDisabled = false;
	let letMultipleFilter = false;

	let hideFilteredElements = true //добавть возможность выбора скрытия либо отображения для фильтруемыых элементов

	const self = this;

	this.initialize = () => {
		self.configurate(config);
	};


	this.configurate = (configData) => {

		container = configData.container ? document.querySelector(configData.container) : container;

		autoSetFirstFilter = configData.autoSetFirstFilter ? configData.autoSetFirstFilter : autoSetFirstFilter;

		filterButtons = Array.prototype.slice.call(container.querySelectorAll(configData.filterButtons), 0);
		filterButtonActiveClass = configData.filterButtonActiveClass ? configData.filterButtonActiveClass : filterButtonActiveClass;

		filterBlocks = Array.prototype.slice.call(container.querySelectorAll(configData.filterBlocks), 0);
		filterBlockActiveClass = configData.filterBlockActiveClass ? configData.filterBlockActiveClass : filterBlockActiveClass;

		filterBlocks.forEach(block => setTags.call(block, filterBlockTargetData));
		filterButtons.forEach(button => {
			setButtonEvents.call(button);
			setTags.call(button, filterButtonsTargetData)
		});

		if(autoSetFirstFilter){
			setActiveButton.call(filterButtons[0], filterButtons, filterButtonActiveClass);
		}
	};
  
	function setTags(attribute) {
		const elem = this;
		elem.tags = [];
		this.getAttribute(attribute).split(' ').forEach(tag => elem.tags.push(tag));
	}

	function setButtonEvents() {
		let button = this;
		this.addEventListener('click', () => {
			if(!letDisabled && !button.classList.contains(filterButtonActiveClass)){
				setActiveButton.call(button, filterButtons, filterButtonActiveClass);
			}
		})
	}

	function cleanActiveElements(activeClass){

		if ((typeof this == 'object')){
			if(this instanceof Array){
				this.forEach(elem => cleanActiveElements.call(elem, activeClass));
			}

			if((this instanceof Element) && this.classList.contains(activeClass)){
				this.classList.remove(activeClass);
			}
		}
	}

	function setActiveButton(filterButtons, filterButtonActiveClass){
		if(!letMultipleFilter){
			cleanActiveElements.call(filterButtons, filterButtonActiveClass);

			cleanActiveElements.call(filterBlocks, filterBlockActiveClass);

			this.classList.add(filterButtonActiveClass);
			this.tags.forEach(tag => {
				if (tag == 'all'){
					self.showAll();
				} else {
					filterBlocks.forEach(block => {
						if(hideFilteredElements && !block.tags.includes(tag)){
							addClass.call(block, filterBlockActiveClass);
						} else if(!hideFilteredElements && block.tags.includes(tag)){
							removeClass.call(block, filterBlockActiveClass);
						}
					}); 
				}
			});
		}
	}

	this.clearFilter = function(){
		cleanActiveElements.call(filterBlocks, filterBlockActiveClass);
	};

	this.showAll = function(){
		if(hideFilteredElements){
			filterBlocks.forEach(block => removeClass.call(block, filterBlockActiveClass));
		} else{
			filterBlocks.forEach(block => addClass.call(block, filterBlockActiveClass));
		}
	};

	this.initialize();

	function removeClass(activeClass){
		if(this.classList.contains(activeClass)){
			this.classList.remove(activeClass);
		}
	}

	function addClass(activeClass){
		if(!this.classList.contains(activeClass)){
			this.classList.add(activeClass);
		}
	}

}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJOVkpTX0ZpbHRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIE5WSlNGaWx0ZXIoY29uZmlnLCAuLi5jb25maWdBdHJpYnV0ZXMpIHtcblx0XG5cdGxldCBmaWx0ZXJCdXR0b25zO1xuXHRsZXQgZmlsdGVyQnV0dG9uc1RhcmdldERhdGEgPSAnZGF0YS1maWx0ZXInO1xuXHRsZXQgZmlsdGVyQnV0dG9uQWN0aXZlQ2xhc3MgPSAnYWN0aXZlJztcblxuXHRsZXQgZmlsdGVyQmxvY2tzO1xuXHRsZXQgZmlsdGVyQmxvY2tBY3RpdmVDbGFzcyA9ICdzaG93bic7XG5cdGxldCBmaWx0ZXJCbG9ja1RhcmdldERhdGEgPSAnZGF0YS10YWdzJztcblxuXHRsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keTtcblxuXHRsZXQgYXV0b1NldEZpcnN0RmlsdGVyID0gdHJ1ZTtcblx0bGV0IGxldERpc2FibGVkID0gZmFsc2U7XG5cdGxldCBsZXRNdWx0aXBsZUZpbHRlciA9IGZhbHNlO1xuXG5cdGxldCBoaWRlRmlsdGVyZWRFbGVtZW50cyA9IHRydWUgLy/QtNC+0LHQsNCy0YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINCy0YvQsdC+0YDQsCDRgdC60YDRi9GC0LjRjyDQu9C40LHQviDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC00LvRjyDRhNC40LvRjNGC0YDRg9C10LzRi9GL0YUg0Y3Qu9C10LzQtdC90YLQvtCyXG5cblx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0dGhpcy5pbml0aWFsaXplID0gKCkgPT4ge1xuXHRcdHNlbGYuY29uZmlndXJhdGUoY29uZmlnKTtcblx0fTtcblxuXG5cdHRoaXMuY29uZmlndXJhdGUgPSAoY29uZmlnRGF0YSkgPT4ge1xuXG5cdFx0Y29udGFpbmVyID0gY29uZmlnRGF0YS5jb250YWluZXIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZ0RhdGEuY29udGFpbmVyKSA6IGNvbnRhaW5lcjtcblxuXHRcdGF1dG9TZXRGaXJzdEZpbHRlciA9IGNvbmZpZ0RhdGEuYXV0b1NldEZpcnN0RmlsdGVyID8gY29uZmlnRGF0YS5hdXRvU2V0Rmlyc3RGaWx0ZXIgOiBhdXRvU2V0Rmlyc3RGaWx0ZXI7XG5cblx0XHRmaWx0ZXJCdXR0b25zID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnRGF0YS5maWx0ZXJCdXR0b25zKSwgMCk7XG5cdFx0ZmlsdGVyQnV0dG9uQWN0aXZlQ2xhc3MgPSBjb25maWdEYXRhLmZpbHRlckJ1dHRvbkFjdGl2ZUNsYXNzID8gY29uZmlnRGF0YS5maWx0ZXJCdXR0b25BY3RpdmVDbGFzcyA6IGZpbHRlckJ1dHRvbkFjdGl2ZUNsYXNzO1xuXG5cdFx0ZmlsdGVyQmxvY2tzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnRGF0YS5maWx0ZXJCbG9ja3MpLCAwKTtcblx0XHRmaWx0ZXJCbG9ja0FjdGl2ZUNsYXNzID0gY29uZmlnRGF0YS5maWx0ZXJCbG9ja0FjdGl2ZUNsYXNzID8gY29uZmlnRGF0YS5maWx0ZXJCbG9ja0FjdGl2ZUNsYXNzIDogZmlsdGVyQmxvY2tBY3RpdmVDbGFzcztcblxuXHRcdGZpbHRlckJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHNldFRhZ3MuY2FsbChibG9jaywgZmlsdGVyQmxvY2tUYXJnZXREYXRhKSk7XG5cdFx0ZmlsdGVyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG5cdFx0XHRzZXRCdXR0b25FdmVudHMuY2FsbChidXR0b24pO1xuXHRcdFx0c2V0VGFncy5jYWxsKGJ1dHRvbiwgZmlsdGVyQnV0dG9uc1RhcmdldERhdGEpXG5cdFx0fSk7XG5cblx0XHRpZihhdXRvU2V0Rmlyc3RGaWx0ZXIpe1xuXHRcdFx0c2V0QWN0aXZlQnV0dG9uLmNhbGwoZmlsdGVyQnV0dG9uc1swXSwgZmlsdGVyQnV0dG9ucywgZmlsdGVyQnV0dG9uQWN0aXZlQ2xhc3MpO1xuXHRcdH1cblx0fTtcbiAgXG5cdGZ1bmN0aW9uIHNldFRhZ3MoYXR0cmlidXRlKSB7XG5cdFx0Y29uc3QgZWxlbSA9IHRoaXM7XG5cdFx0ZWxlbS50YWdzID0gW107XG5cdFx0dGhpcy5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKS5zcGxpdCgnICcpLmZvckVhY2godGFnID0+IGVsZW0udGFncy5wdXNoKHRhZykpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0QnV0dG9uRXZlbnRzKCkge1xuXHRcdGxldCBidXR0b24gPSB0aGlzO1xuXHRcdHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRpZighbGV0RGlzYWJsZWQgJiYgIWJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoZmlsdGVyQnV0dG9uQWN0aXZlQ2xhc3MpKXtcblx0XHRcdFx0c2V0QWN0aXZlQnV0dG9uLmNhbGwoYnV0dG9uLCBmaWx0ZXJCdXR0b25zLCBmaWx0ZXJCdXR0b25BY3RpdmVDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdGZ1bmN0aW9uIGNsZWFuQWN0aXZlRWxlbWVudHMoYWN0aXZlQ2xhc3Mpe1xuXG5cdFx0aWYgKCh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0Jykpe1xuXHRcdFx0aWYodGhpcyBpbnN0YW5jZW9mIEFycmF5KXtcblx0XHRcdFx0dGhpcy5mb3JFYWNoKGVsZW0gPT4gY2xlYW5BY3RpdmVFbGVtZW50cy5jYWxsKGVsZW0sIGFjdGl2ZUNsYXNzKSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKCh0aGlzIGluc3RhbmNlb2YgRWxlbWVudCkgJiYgdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoYWN0aXZlQ2xhc3MpKXtcblx0XHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oZmlsdGVyQnV0dG9ucywgZmlsdGVyQnV0dG9uQWN0aXZlQ2xhc3Mpe1xuXHRcdGlmKCFsZXRNdWx0aXBsZUZpbHRlcil7XG5cdFx0XHRjbGVhbkFjdGl2ZUVsZW1lbnRzLmNhbGwoZmlsdGVyQnV0dG9ucywgZmlsdGVyQnV0dG9uQWN0aXZlQ2xhc3MpO1xuXG5cdFx0XHRjbGVhbkFjdGl2ZUVsZW1lbnRzLmNhbGwoZmlsdGVyQmxvY2tzLCBmaWx0ZXJCbG9ja0FjdGl2ZUNsYXNzKTtcblxuXHRcdFx0dGhpcy5jbGFzc0xpc3QuYWRkKGZpbHRlckJ1dHRvbkFjdGl2ZUNsYXNzKTtcblx0XHRcdHRoaXMudGFncy5mb3JFYWNoKHRhZyA9PiB7XG5cdFx0XHRcdGlmICh0YWcgPT0gJ2FsbCcpe1xuXHRcdFx0XHRcdHNlbGYuc2hvd0FsbCgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZpbHRlckJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHtcblx0XHRcdFx0XHRcdGlmKGhpZGVGaWx0ZXJlZEVsZW1lbnRzICYmICFibG9jay50YWdzLmluY2x1ZGVzKHRhZykpe1xuXHRcdFx0XHRcdFx0XHRhZGRDbGFzcy5jYWxsKGJsb2NrLCBmaWx0ZXJCbG9ja0FjdGl2ZUNsYXNzKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZighaGlkZUZpbHRlcmVkRWxlbWVudHMgJiYgYmxvY2sudGFncy5pbmNsdWRlcyh0YWcpKXtcblx0XHRcdFx0XHRcdFx0cmVtb3ZlQ2xhc3MuY2FsbChibG9jaywgZmlsdGVyQmxvY2tBY3RpdmVDbGFzcyk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7IFxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmNsZWFyRmlsdGVyID0gZnVuY3Rpb24oKXtcblx0XHRjbGVhbkFjdGl2ZUVsZW1lbnRzLmNhbGwoZmlsdGVyQmxvY2tzLCBmaWx0ZXJCbG9ja0FjdGl2ZUNsYXNzKTtcblx0fTtcblxuXHR0aGlzLnNob3dBbGwgPSBmdW5jdGlvbigpe1xuXHRcdGlmKGhpZGVGaWx0ZXJlZEVsZW1lbnRzKXtcblx0XHRcdGZpbHRlckJsb2Nrcy5mb3JFYWNoKGJsb2NrID0+IHJlbW92ZUNsYXNzLmNhbGwoYmxvY2ssIGZpbHRlckJsb2NrQWN0aXZlQ2xhc3MpKTtcblx0XHR9IGVsc2V7XG5cdFx0XHRmaWx0ZXJCbG9ja3MuZm9yRWFjaChibG9jayA9PiBhZGRDbGFzcy5jYWxsKGJsb2NrLCBmaWx0ZXJCbG9ja0FjdGl2ZUNsYXNzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuaW5pdGlhbGl6ZSgpO1xuXG5cdGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKXtcblx0XHRpZih0aGlzLmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmVDbGFzcykpe1xuXHRcdFx0dGhpcy5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRDbGFzcyhhY3RpdmVDbGFzcyl7XG5cdFx0aWYoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKGFjdGl2ZUNsYXNzKSl7XG5cdFx0XHR0aGlzLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xuXHRcdH1cblx0fVxuXG59Il0sImZpbGUiOiJOVkpTX0ZpbHRlci5qcyJ9
