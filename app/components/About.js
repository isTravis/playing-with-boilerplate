import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const About = function({ appData }) {
	return (
		<div>
			<Helmet>
				<title>About Page!!</title>
			</Helmet>
			<h1>This is my About Page!!</h1>
			<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tortor quis elit scelerisque, imperdiet sagittis sapien congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi tincidunt justo id egestas ultrices. Nam accumsan hendrerit gravida. In luctus nibh et erat euismod feugiat. Quisque sodales in nisl at aliquam. Duis euismod aliquam erat sed finibus. Nullam posuere, enim eu scelerisque pharetra, metus eros pellentesque dui, sit amet posuere lectus arcu eu sapien. Pellentesque lobortis maximus justo eget pharetra. In hac habitasse platea dictumst. Donec pulvinar ante erat, non mattis velit tincidunt ut. Donec sed tempus mauris. In id blandit justo. Etiam et condimentum dolor. Donec in diam risus. Morbi at dui nec ipsum ullamcorper molestie elementum vel diam. Donec molestie, nisi nec suscipit tempus, arcu quam facilisis urna, eget molestie turpis dolor placerat felis. Suspendisse posuere eget orci sit amet molestie. Cras placerat viverra ultricies. Integer finibus odio eget ante rutrum, et porta sem iaculis. Ut sed elementum leo. Etiam tincidunt, ex vel eleifend finibus, purus ipsum hendrerit dolor, vestibulum finibus ipsum eros quis orci. Pellentesque euismod egestas lorem, a finibus nunc consectetur sed. Cras at tortor sollicitudin, feugiat lacus eget, volutpat elit. Nam varius dignissim libero, sit amet malesuada mauris condimentum ac. Nunc maximus urna eu nisl sollicitudin eleifend. Sed eu nunc lobortis massa pulvinar dignissim sed et quam. Ut blandit, velit at condimentum ornare, urna sem vulputate justo, a eleifend urna mauris sed sapien. Cras nec cursus ex, a lobortis dolor. Praesent maximus varius suscipit. Phasellus convallis leo non arcu blandit, eget fringilla metus malesuada. Curabitur quis lacus id leo feugiat hendrerit et eget turpis. Curabitur auctor metus nec nunc venenatis, sed pulvinar est tempus. Sed posuere tellus diam, eu congue erat scelerisque at. Proin sed consequat neque. Curabitur porttitor libero ligula, sed interdum orci ultricies ac. Curabitur ut erat lorem. Fusce sed dolor id velit tempus aliquet. Phasellus in lacus eu dolor fringilla commodo id non nunc. Proin pretium suscipit erat vel sagittis. Nullam at erat magna. Sed risus turpis, sodales non ex et, convallis feugiat purus. Vivamus egestas luctus libero non sagittis. Integer tortor odio, vulputate at sapien sed, congue rutrum nulla. Aliquam vitae tortor elementum elit placerat laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed metus eu eros placerat ornare. Duis porta elit a semper blandit. Praesent vel sagittis elit. Quisque rhoncus nisi magna, ac mollis ex porta at. Nam ut dignissim nulla. Aliquam erat volutpat. Nunc vel malesuada ex, non aliquet nisi. Duis eget nunc tortor.</div>
			<div id="dog">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tortor quis elit scelerisque, imperdiet sagittis sapien congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi tincidunt justo id egestas ultrices. Nam accumsan hendrerit gravida. In luctus nibh et erat euismod feugiat. Quisque sodales in nisl at aliquam. Duis euismod aliquam erat sed finibus. Nullam posuere, enim eu scelerisque pharetra, metus eros pellentesque dui, sit amet posuere lectus arcu eu sapien. Pellentesque lobortis maximus justo eget pharetra. In hac habitasse platea dictumst. Donec pulvinar ante erat, non mattis velit tincidunt ut. Donec sed tempus mauris. In id blandit justo. Etiam et condimentum dolor. Donec in diam risus. Morbi at dui nec ipsum ullamcorper molestie elementum vel diam. Donec molestie, nisi nec suscipit tempus, arcu quam facilisis urna, eget molestie turpis dolor placerat felis. Suspendisse posuere eget orci sit amet molestie. Cras placerat viverra ultricies. Integer finibus odio eget ante rutrum, et porta sem iaculis. Ut sed elementum leo. Etiam tincidunt, ex vel eleifend finibus, purus ipsum hendrerit dolor, vestibulum finibus ipsum eros quis orci. Pellentesque euismod egestas lorem, a finibus nunc consectetur sed. Cras at tortor sollicitudin, feugiat lacus eget, volutpat elit. Nam varius dignissim libero, sit amet malesuada mauris condimentum ac. Nunc maximus urna eu nisl sollicitudin eleifend. Sed eu nunc lobortis massa pulvinar dignissim sed et quam. Ut blandit, velit at condimentum ornare, urna sem vulputate justo, a eleifend urna mauris sed sapien. Cras nec cursus ex, a lobortis dolor. Praesent maximus varius suscipit. Phasellus convallis leo non arcu blandit, eget fringilla metus malesuada. Curabitur quis lacus id leo feugiat hendrerit et eget turpis. Curabitur auctor metus nec nunc venenatis, sed pulvinar est tempus. Sed posuere tellus diam, eu congue erat scelerisque at. Proin sed consequat neque. Curabitur porttitor libero ligula, sed interdum orci ultricies ac. Curabitur ut erat lorem. Fusce sed dolor id velit tempus aliquet. Phasellus in lacus eu dolor fringilla commodo id non nunc. Proin pretium suscipit erat vel sagittis. Nullam at erat magna. Sed risus turpis, sodales non ex et, convallis feugiat purus. Vivamus egestas luctus libero non sagittis. Integer tortor odio, vulputate at sapien sed, congue rutrum nulla. Aliquam vitae tortor elementum elit placerat laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed metus eu eros placerat ornare. Duis porta elit a semper blandit. Praesent vel sagittis elit. Quisque rhoncus nisi magna, ac mollis ex porta at. Nam ut dignissim nulla. Aliquam erat volutpat. Nunc vel malesuada ex, non aliquet nisi. Duis eget nunc tortor.</div>
			<Link to={'/'}>Home</Link>
			<div id="cat">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum tortor quis elit scelerisque, imperdiet sagittis sapien congue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi tincidunt justo id egestas ultrices. Nam accumsan hendrerit gravida. In luctus nibh et erat euismod feugiat. Quisque sodales in nisl at aliquam. Duis euismod aliquam erat sed finibus. Nullam posuere, enim eu scelerisque pharetra, metus eros pellentesque dui, sit amet posuere lectus arcu eu sapien. Pellentesque lobortis maximus justo eget pharetra. In hac habitasse platea dictumst. Donec pulvinar ante erat, non mattis velit tincidunt ut. Donec sed tempus mauris. In id blandit justo. Etiam et condimentum dolor. Donec in diam risus. Morbi at dui nec ipsum ullamcorper molestie elementum vel diam. Donec molestie, nisi nec suscipit tempus, arcu quam facilisis urna, eget molestie turpis dolor placerat felis. Suspendisse posuere eget orci sit amet molestie. Cras placerat viverra ultricies. Integer finibus odio eget ante rutrum, et porta sem iaculis. Ut sed elementum leo. Etiam tincidunt, ex vel eleifend finibus, purus ipsum hendrerit dolor, vestibulum finibus ipsum eros quis orci. Pellentesque euismod egestas lorem, a finibus nunc consectetur sed. Cras at tortor sollicitudin, feugiat lacus eget, volutpat elit. Nam varius dignissim libero, sit amet malesuada mauris condimentum ac. Nunc maximus urna eu nisl sollicitudin eleifend. Sed eu nunc lobortis massa pulvinar dignissim sed et quam. Ut blandit, velit at condimentum ornare, urna sem vulputate justo, a eleifend urna mauris sed sapien. Cras nec cursus ex, a lobortis dolor. Praesent maximus varius suscipit. Phasellus convallis leo non arcu blandit, eget fringilla metus malesuada. Curabitur quis lacus id leo feugiat hendrerit et eget turpis. Curabitur auctor metus nec nunc venenatis, sed pulvinar est tempus. Sed posuere tellus diam, eu congue erat scelerisque at. Proin sed consequat neque. Curabitur porttitor libero ligula, sed interdum orci ultricies ac. Curabitur ut erat lorem. Fusce sed dolor id velit tempus aliquet. Phasellus in lacus eu dolor fringilla commodo id non nunc. Proin pretium suscipit erat vel sagittis. Nullam at erat magna. Sed risus turpis, sodales non ex et, convallis feugiat purus. Vivamus egestas luctus libero non sagittis. Integer tortor odio, vulputate at sapien sed, congue rutrum nulla. Aliquam vitae tortor elementum elit placerat laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed metus eu eros placerat ornare. Duis porta elit a semper blandit. Praesent vel sagittis elit. Quisque rhoncus nisi magna, ac mollis ex porta at. Nam ut dignissim nulla. Aliquam erat volutpat. Nunc vel malesuada ex, non aliquet nisi. Duis eget nunc tortor.</div>
			
		</div>
	);
};

About.propTypes = {
	appData: PropTypes.shape({}).isRequired,
};

export default connect(state => ({ appData: state.app }))(About);
