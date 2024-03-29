import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import TreeViewData from '../../entities/models/treeViewData';

export declare interface Props {
  treeViewData: TreeViewData[];
}

// eslint-disable-next-line react/function-component-definition
export default function ProductTreeView() {
  const [expanded, setExpanded] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleToggle = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpanded(nodeIds);
  };
  const handleSelect = (event: React.SyntheticEvent, nodeIds: string[]) => {
    setSelected(nodeIds);
  };
  const handleExpandClick = () => {
    setExpanded((oldExpanded) => (oldExpanded.length === 0 ? ['1', '5', '6', '7'] : []));
  };
  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0 ? ['1', '2', '3', '4', '5', '6', '7', '8', '9'] : []
    );
  };

  const row: TreeViewData = {
    id: 1,
    parentId: 0,
    name: 'First',
  };

  const data: TreeViewData[] = [];
  data.push(row);

  // eslint-disable-next-line consistent-return
  function createTree(parentId = 0) {
    const nodesToAdd: TreeViewData[] = [];

    // eslint-disable-next-line array-callback-return
    data.map((n) => {
      if (n.parentId === parentId) nodesToAdd.push(n);
    });

    if (nodesToAdd.length > 0) {
      return nodesToAdd?.map((n) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <TreeItem nodeId={n.id.toString()} label={n.name}>
            {createTree(n.id)}
          </TreeItem>
        );
      });
    }
  }

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
      <TreeView
        aria-label="controlled"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        expanded={expanded}
        selected={selected}
        onNodeToggle={handleToggle}
        onNodeSelect={handleSelect}
        multiSelect
      >
        {createTree()}
      </TreeView>
    </Box>
  );
}
